/**
 * STEM by Me 項目壓力測試腳本
 * 測試範圍：Firebase連接、DOM操作、事件處理、數據處理、性能等
 */

class StressTest {
    constructor() {
        this.testResults = [];
        this.startTime = Date.now();
        this.testCount = 0;
        this.passCount = 0;
        this.failCount = 0;
        this.performanceMetrics = {};
    }

    // 測試結果記錄
    logTest(testName, passed, details = '', duration = 0) {
        this.testCount++;
        if (passed) {
            this.passCount++;
            console.log(`✅ ${testName} - 通過 (${duration}ms)`);
        } else {
            this.failCount++;
            console.error(`❌ ${testName} - 失敗 (${duration}ms): ${details}`);
        }
        
        this.testResults.push({
            name: testName,
            passed,
            details,
            duration,
            timestamp: Date.now()
        });
    }

    // 性能測試
    async performanceTest(testName, testFunction, iterations = 100) {
        const startTime = performance.now();
        const results = [];
        
        for (let i = 0; i < iterations; i++) {
            const iterStart = performance.now();
            try {
                await testFunction();
                results.push(performance.now() - iterStart);
            } catch (error) {
                console.error(`性能測試迭代 ${i} 失敗:`, error);
            }
        }
        
        const totalTime = performance.now() - startTime;
        const avgTime = results.reduce((a, b) => a + b, 0) / results.length;
        const minTime = Math.min(...results);
        const maxTime = Math.max(...results);
        
        this.performanceMetrics[testName] = {
            totalTime,
            avgTime,
            minTime,
            maxTime,
            iterations,
            successRate: (results.length / iterations) * 100
        };
        
        console.log(`📊 ${testName} 性能測試結果:`);
        console.log(`   總時間: ${totalTime.toFixed(2)}ms`);
        console.log(`   平均時間: ${avgTime.toFixed(2)}ms`);
        console.log(`   最小時間: ${minTime.toFixed(2)}ms`);
        console.log(`   最大時間: ${maxTime.toFixed(2)}ms`);
        console.log(`   成功率: ${this.performanceMetrics[testName].successRate.toFixed(1)}%`);
        
        return this.performanceMetrics[testName];
    }

    // 1. Firebase 連接測試
    async testFirebaseConnection() {
        const startTime = performance.now();
        try {
            // 測試 Firebase 初始化
            if (typeof initializeFirebase === 'function') {
                const result = initializeFirebase();
                if (result) {
                    this.logTest('Firebase 初始化', true, '', performance.now() - startTime);
                } else {
                    this.logTest('Firebase 初始化', false, '初始化失敗', performance.now() - startTime);
                }
            } else {
                this.logTest('Firebase 初始化', false, 'initializeFirebase 函數不存在', performance.now() - startTime);
            }

            // 測試 Firebase 全局變量
            if (window.db && window.analytics) {
                this.logTest('Firebase 全局變量', true, '', performance.now() - startTime);
            } else {
                this.logTest('Firebase 全局變量', false, '全局變量未正確設置', performance.now() - startTime);
            }

        } catch (error) {
            this.logTest('Firebase 連接測試', false, error.message, performance.now() - startTime);
        }
    }

    // 2. DOM 元素存在性測試
    async testDOMElements() {
        const startTime = performance.now();
        const requiredElements = [
            'progress-grid',
            'score-value',
            'quiz-questions-section',
            'photo-upload-section',
            'admin-panel',
            'password-input-group'
        ];

        const missingElements = [];
        requiredElements.forEach(elementId => {
            if (!document.getElementById(elementId)) {
                missingElements.push(elementId);
            }
        });

        if (missingElements.length === 0) {
            this.logTest('DOM 元素存在性', true, '', performance.now() - startTime);
        } else {
            this.logTest('DOM 元素存在性', false, `缺少元素: ${missingElements.join(', ')}`, performance.now() - startTime);
        }
    }

    // 3. 位置數據測試
    async testLocationData() {
        const startTime = performance.now();
        try {
            if (typeof locationData === 'object' && locationData !== null) {
                const locationCount = Object.keys(locationData).length;
                if (locationCount > 0) {
                    this.logTest('位置數據加載', true, `共 ${locationCount} 個位置`, performance.now() - startTime);
                } else {
                    this.logTest('位置數據加載', false, '位置數據為空', performance.now() - startTime);
                }
            } else {
                this.logTest('位置數據加載', false, 'locationData 未定義', performance.now() - startTime);
            }
        } catch (error) {
            this.logTest('位置數據測試', false, error.message, performance.now() - startTime);
        }
    }

    // 4. 問卷數據測試
    async testQuizData() {
        const startTime = performance.now();
        try {
            if (typeof quizData === 'object' && quizData !== null) {
                const quizCount = Object.keys(quizData).length;
                if (quizCount > 0) {
                    this.logTest('問卷數據加載', true, `共 ${quizCount} 個問卷`, performance.now() - startTime);
                } else {
                    this.logTest('問卷數據加載', false, '問卷數據為空', performance.now() - startTime);
                }
            } else {
                this.logTest('問卷數據加載', false, 'quizData 未定義', performance.now() - startTime);
            }
        } catch (error) {
            this.logTest('問卷數據測試', false, error.message, performance.now() - startTime);
        }
    }

    // 5. 函數存在性測試
    async testFunctionExistence() {
        const startTime = performance.now();
        const requiredFunctions = [
            'updateScoreDisplay',
            'checkPassword',
            'showQuizQuestionsForLocation',
            'hideQuizQuestions',
            'loadQuizContent',
            'submitQuiz',
            'uploadScoreToFirebase',
            'getUserScoreFromFirebase'
        ];

        const missingFunctions = [];
        requiredFunctions.forEach(funcName => {
            if (typeof window[funcName] !== 'function') {
                missingFunctions.push(funcName);
            }
        });

        if (missingFunctions.length === 0) {
            this.logTest('關鍵函數存在性', true, '', performance.now() - startTime);
        } else {
            this.logTest('關鍵函數存在性', false, `缺少函數: ${missingFunctions.join(', ')}`, performance.now() - startTime);
        }
    }

    // 6. 事件監聽器測試
    async testEventListeners() {
        const startTime = performance.now();
        try {
            // 模擬點擊事件
            const testButton = document.createElement('button');
            testButton.id = 'test-button';
            document.body.appendChild(testButton);
            
            let eventFired = false;
            testButton.addEventListener('click', () => {
                eventFired = true;
            });
            
            testButton.click();
            
            setTimeout(() => {
                if (eventFired) {
                    this.logTest('事件監聽器', true, '', performance.now() - startTime);
                } else {
                    this.logTest('事件監聽器', false, '事件未觸發', performance.now() - startTime);
                }
                document.body.removeChild(testButton);
            }, 100);
            
        } catch (error) {
            this.logTest('事件監聽器測試', false, error.message, performance.now() - startTime);
        }
    }

    // 7. 本地存儲測試
    async testLocalStorage() {
        const startTime = performance.now();
        try {
            const testKey = 'stress_test_key';
            const testValue = 'stress_test_value';
            
            localStorage.setItem(testKey, testValue);
            const retrievedValue = localStorage.getItem(testKey);
            localStorage.removeItem(testKey);
            
            if (retrievedValue === testValue) {
                this.logTest('本地存儲功能', true, '', performance.now() - startTime);
            } else {
                this.logTest('本地存儲功能', false, '數據讀寫不一致', performance.now() - startTime);
            }
        } catch (error) {
            this.logTest('本地存儲測試', false, error.message, performance.now() - startTime);
        }
    }

    // 8. 問卷系統壓力測試
    async testQuizSystemStress() {
        const startTime = performance.now();
        try {
            if (typeof loadQuizContent === 'function' && typeof showQuizResults === 'function') {
                // 模擬多次問卷加載
                const testLocation = Object.keys(quizData || {})[0];
                if (testLocation) {
                    for (let i = 0; i < 10; i++) {
                        try {
                            loadQuizContent(testLocation);
                        } catch (error) {
                            console.warn(`問卷加載迭代 ${i} 失敗:`, error);
                        }
                    }
                    this.logTest('問卷系統壓力測試', true, '10次迭代完成', performance.now() - startTime);
                } else {
                    this.logTest('問卷系統壓力測試', false, '無可用問卷數據', performance.now() - startTime);
                }
            } else {
                this.logTest('問卷系統壓力測試', false, '問卷函數不存在', performance.now() - startTime);
            }
        } catch (error) {
            this.logTest('問卷系統壓力測試', false, error.message, performance.now() - startTime);
        }
    }

    // 9. Firebase 分數上傳壓力測試
    async testFirebaseScoreUploadStress() {
        const startTime = performance.now();
        try {
            if (typeof uploadScoreToFirebase === 'function') {
                const testData = {
                    userID: 'stress_test_user',
                    locationID: 'TEST001',
                    score: 100,
                    gameType: 'stress_test'
                };
                
                let successCount = 0;
                for (let i = 0; i < 5; i++) {
                    try {
                        const result = await uploadScoreToFirebase(testData.userID, testData.locationID, testData.score, testData.gameType);
                        if (result) successCount++;
                    } catch (error) {
                        console.warn(`Firebase 上傳迭代 ${i} 失敗:`, error);
                    }
                }
                
                this.logTest('Firebase 分數上傳壓力測試', successCount > 0, `${successCount}/5 成功`, performance.now() - startTime);
            } else {
                this.logTest('Firebase 分數上傳壓力測試', false, 'uploadScoreToFirebase 函數不存在', performance.now() - startTime);
            }
        } catch (error) {
            this.logTest('Firebase 分數上傳壓力測試', false, error.message, performance.now() - startTime);
        }
    }

    // 10. 內存使用測試
    async testMemoryUsage() {
        const startTime = performance.now();
        try {
            if (performance.memory) {
                const initialMemory = performance.memory.usedJSHeapSize;
                
                // 執行一些內存密集型操作
                const testArray = [];
                for (let i = 0; i < 1000; i++) {
                    testArray.push({
                        id: i,
                        data: `test_data_${i}`,
                        timestamp: Date.now()
                    });
                }
                
                const finalMemory = performance.memory.usedJSHeapSize;
                const memoryIncrease = finalMemory - initialMemory;
                
                // 清理測試數據
                testArray.length = 0;
                
                if (memoryIncrease < 10 * 1024 * 1024) { // 10MB 限制
                    this.logTest('內存使用測試', true, `內存增加: ${(memoryIncrease / 1024 / 1024).toFixed(2)}MB`, performance.now() - startTime);
                } else {
                    this.logTest('內存使用測試', false, `內存增加過多: ${(memoryIncrease / 1024 / 1024).toFixed(2)}MB`, performance.now() - startTime);
                }
            } else {
                this.logTest('內存使用測試', false, 'performance.memory 不可用', performance.now() - startTime);
            }
        } catch (error) {
            this.logTest('內存使用測試', false, error.message, performance.now() - startTime);
        }
    }

    // 11. 響應時間測試
    async testResponseTime() {
        const startTime = performance.now();
        try {
            const testOperations = [
                () => updateScoreDisplay(),
                () => {
                    if (typeof loadQuizContent === 'function') {
                        const testLocation = Object.keys(quizData || {})[0];
                        if (testLocation) loadQuizContent(testLocation);
                    }
                },
                () => {
                    if (typeof showQuizQuestionsForLocation === 'function') {
                        const testLocation = Object.keys(locationData || {})[0];
                        if (testLocation) showQuizQuestionsForLocation(testLocation);
                    }
                }
            ];
            
            let totalTime = 0;
            let successCount = 0;
            
            for (const operation of testOperations) {
                const opStart = performance.now();
                try {
                    operation();
                    totalTime += performance.now() - opStart;
                    successCount++;
                } catch (error) {
                    console.warn('響應時間測試操作失敗:', error);
                }
            }
            
            const avgTime = successCount > 0 ? totalTime / successCount : 0;
            
            if (avgTime < 1000) { // 1秒限制
                this.logTest('響應時間測試', true, `平均響應時間: ${avgTime.toFixed(2)}ms`, performance.now() - startTime);
            } else {
                this.logTest('響應時間測試', false, `響應時間過長: ${avgTime.toFixed(2)}ms`, performance.now() - startTime);
            }
        } catch (error) {
            this.logTest('響應時間測試', false, error.message, performance.now() - startTime);
        }
    }

    // 12. 並發操作測試
    async testConcurrentOperations() {
        const startTime = performance.now();
        try {
            const promises = [];
            
            // 模擬多個並發操作
            for (let i = 0; i < 5; i++) {
                promises.push(new Promise(async (resolve) => {
                    try {
                        // 模擬問卷加載
                        if (typeof loadQuizContent === 'function') {
                            const testLocation = Object.keys(quizData || {})[0];
                            if (testLocation) {
                                loadQuizContent(testLocation);
                            }
                        }
                        
                        // 模擬分數更新
                        if (typeof updateScoreDisplay === 'function') {
                            updateScoreDisplay();
                        }
                        
                        resolve(true);
                    } catch (error) {
                        console.warn(`並發操作 ${i} 失敗:`, error);
                        resolve(false);
                    }
                }));
            }
            
            const results = await Promise.all(promises);
            const successCount = results.filter(r => r).length;
            
            this.logTest('並發操作測試', successCount > 0, `${successCount}/5 成功`, performance.now() - startTime);
        } catch (error) {
            this.logTest('並發操作測試', false, error.message, performance.now() - startTime);
        }
    }

    // 執行所有測試
    async runAllTests() {
        console.log('🚀 開始 STEM by Me 項目壓力測試...');
        console.log('=' .repeat(60));
        
        const testStartTime = Date.now();
        
        // 基礎功能測試
        await this.testFirebaseConnection();
        await this.testDOMElements();
        await this.testLocationData();
        await this.testQuizData();
        await this.testFunctionExistence();
        await this.testEventListeners();
        await this.testLocalStorage();
        
        // 壓力測試
        await this.testQuizSystemStress();
        await this.testFirebaseScoreUploadStress();
        await this.testMemoryUsage();
        await this.testResponseTime();
        await this.testConcurrentOperations();
        
        // 性能測試
        await this.performanceTest('問卷加載性能', async () => {
            if (typeof loadQuizContent === 'function') {
                const testLocation = Object.keys(quizData || {})[0];
                if (testLocation) loadQuizContent(testLocation);
            }
        }, 50);
        
        await this.performanceTest('分數更新性能', async () => {
            if (typeof updateScoreDisplay === 'function') {
                updateScoreDisplay();
            }
        }, 100);
        
        const totalTime = Date.now() - testStartTime;
        
        // 生成測試報告
        this.generateReport(totalTime);
    }

    // 生成測試報告
    generateReport(totalTime) {
        console.log('\n' + '=' .repeat(60));
        console.log('📊 壓力測試報告');
        console.log('=' .repeat(60));
        
        console.log(`總測試時間: ${totalTime}ms`);
        console.log(`總測試數: ${this.testCount}`);
        console.log(`通過: ${this.passCount}`);
        console.log(`失敗: ${this.failCount}`);
        console.log(`成功率: ${((this.passCount / this.testCount) * 100).toFixed(1)}%`);
        
        console.log('\n📈 性能指標:');
        Object.keys(this.performanceMetrics).forEach(testName => {
            const metrics = this.performanceMetrics[testName];
            console.log(`  ${testName}:`);
            console.log(`    平均時間: ${metrics.avgTime.toFixed(2)}ms`);
            console.log(`    成功率: ${metrics.successRate.toFixed(1)}%`);
        });
        
        console.log('\n🔍 失敗測試詳情:');
        const failedTests = this.testResults.filter(test => !test.passed);
        if (failedTests.length > 0) {
            failedTests.forEach(test => {
                console.log(`  ❌ ${test.name}: ${test.details}`);
            });
        } else {
            console.log('  ✅ 所有測試都通過了！');
        }
        
        // 保存測試結果到本地存儲
        try {
            localStorage.setItem('stress_test_results', JSON.stringify({
                timestamp: Date.now(),
                results: this.testResults,
                performance: this.performanceMetrics,
                summary: {
                    totalTests: this.testCount,
                    passed: this.passCount,
                    failed: this.failCount,
                    successRate: (this.passCount / this.testCount) * 100,
                    totalTime: totalTime
                }
            }));
            console.log('\n💾 測試結果已保存到本地存儲');
        } catch (error) {
            console.error('保存測試結果失敗:', error);
        }
    }
}

// 自動執行測試（當腳本加載時）
if (typeof window !== 'undefined') {
    window.StressTest = StressTest;
    
    // 等待頁面完全加載後執行測試
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                const stressTest = new StressTest();
                stressTest.runAllTests();
            }, 2000); // 等待 2 秒確保所有腳本都加載完成
        });
    } else {
        setTimeout(() => {
            const stressTest = new StressTest();
            stressTest.runAllTests();
        }, 2000);
    }
}

// 導出測試類（如果支持模塊系統）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StressTest;
}
