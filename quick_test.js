/**
 * STEM by Me 項目快速測試腳本
 * 用於在 Node.js 環境中進行基本的項目檢查
 */

const fs = require('fs');
const path = require('path');

class QuickTest {
    constructor() {
        this.results = [];
        this.startTime = Date.now();
    }

    logTest(testName, passed, details = '') {
        const status = passed ? '✅' : '❌';
        const message = `${status} ${testName} - ${passed ? '通過' : '失敗'}`;
        if (details) {
            console.log(`${message}: ${details}`);
        } else {
            console.log(message);
        }
        
        this.results.push({
            name: testName,
            passed,
            details,
            timestamp: Date.now()
        });
    }

    // 檢查必要文件是否存在
    testRequiredFiles() {
        console.log('\n📁 檢查必要文件...');
        
        const requiredFiles = [
            'game.html',
            'script.js',
            'firebase-config.js',
            'firebase-config1.js',
            'login.js',
            'index.html'
        ];

        requiredFiles.forEach(file => {
            const exists = fs.existsSync(file);
            this.logTest(`文件存在性: ${file}`, exists, exists ? '' : '文件不存在');
        });
    }

    // 檢查文件大小
    testFileSizes() {
        console.log('\n📏 檢查文件大小...');
        
        const filesToCheck = [
            { name: 'script.js', maxSize: 150 * 1024 }, // 150KB
            { name: 'game.html', maxSize: 120 * 1024 }, // 120KB
            { name: 'firebase-config.js', maxSize: 10 * 1024 }, // 10KB
            { name: 'login.js', maxSize: 20 * 1024 } // 20KB
        ];

        filesToCheck.forEach(file => {
            if (fs.existsSync(file.name)) {
                const stats = fs.statSync(file.name);
                const sizeKB = stats.size / 1024;
                const isReasonable = stats.size <= file.maxSize;
                this.logTest(
                    `文件大小: ${file.name}`,
                    isReasonable,
                    `${sizeKB.toFixed(1)}KB ${isReasonable ? '(正常)' : '(過大)'}`
                );
            } else {
                this.logTest(`文件大小: ${file.name}`, false, '文件不存在');
            }
        });
    }

    // 檢查目錄結構
    testDirectoryStructure() {
        console.log('\n📂 檢查目錄結構...');
        
        const requiredDirs = [
            'css',
            'js',
            'img',
            'games',
            'vendors'
        ];

        requiredDirs.forEach(dir => {
            const exists = fs.existsSync(dir) && fs.statSync(dir).isDirectory();
            this.logTest(`目錄存在性: ${dir}`, exists, exists ? '' : '目錄不存在');
        });
    }

    // 檢查 JavaScript 語法
    testJavaScriptSyntax() {
        console.log('\n🔍 檢查 JavaScript 語法...');
        
        const jsFiles = [
            'script.js',
            'firebase-config.js',
            'firebase-config1.js',
            'login.js'
        ];

        jsFiles.forEach(file => {
            if (fs.existsSync(file)) {
                try {
                    const content = fs.readFileSync(file, 'utf8');
                    
                    // 基本語法檢查
                    const hasSyntaxErrors = this.checkBasicSyntax(content);
                    this.logTest(
                        `JavaScript 語法: ${file}`,
                        !hasSyntaxErrors,
                        hasSyntaxErrors ? '發現語法問題' : '語法正確'
                    );
                } catch (error) {
                    this.logTest(`JavaScript 語法: ${file}`, false, `讀取文件失敗: ${error.message}`);
                }
            } else {
                this.logTest(`JavaScript 語法: ${file}`, false, '文件不存在');
            }
        });
    }

    // 基本語法檢查
    checkBasicSyntax(content) {
        const commonIssues = [
            /[^;]\s*$/m, // 缺少分號
            /function\s*\([^)]*\)\s*\{[^}]*$/, // 未閉合的函數
            /if\s*\([^)]*\)\s*\{[^}]*$/, // 未閉合的 if 語句
            /for\s*\([^)]*\)\s*\{[^}]*$/, // 未閉合的 for 語句
            /while\s*\([^)]*\)\s*\{[^}]*$/, // 未閉合的 while 語句
            /const\s+\w+\s*=\s*[^;]*$/, // 未完成的 const 聲明
            /let\s+\w+\s*=\s*[^;]*$/, // 未完成的 let 聲明
            /var\s+\w+\s*=\s*[^;]*$/ // 未完成的 var 聲明
        ];

        return commonIssues.some(pattern => pattern.test(content));
    }

    // 檢查 HTML 結構
    testHTMLStructure() {
        console.log('\n🌐 檢查 HTML 結構...');
        
        const htmlFiles = ['game.html', 'index.html'];
        
        htmlFiles.forEach(file => {
            if (fs.existsSync(file)) {
                try {
                    const content = fs.readFileSync(file, 'utf8');
                    
                    // 檢查基本 HTML 結構
                    const hasDoctype = /<!DOCTYPE html>/i.test(content);
                    const hasHtmlTag = /<html[^>]*>/i.test(content);
                    const hasHeadTag = /<head[^>]*>/i.test(content);
                    const hasBodyTag = /<body[^>]*>/i.test(content);
                    const hasClosingTags = /<\/html>/i.test(content);
                    
                    const isWellFormed = hasDoctype && hasHtmlTag && hasHeadTag && hasBodyTag && hasClosingTags;
                    
                    this.logTest(
                        `HTML 結構: ${file}`,
                        isWellFormed,
                        isWellFormed ? '結構完整' : '結構不完整'
                    );
                } catch (error) {
                    this.logTest(`HTML 結構: ${file}`, false, `讀取文件失敗: ${error.message}`);
                }
            } else {
                this.logTest(`HTML 結構: ${file}`, false, '文件不存在');
            }
        });
    }

    // 檢查 Firebase 配置
    testFirebaseConfig() {
        console.log('\n🔥 檢查 Firebase 配置...');
        
        const configFiles = ['firebase-config.js', 'firebase-config1.js'];
        
        configFiles.forEach(file => {
            if (fs.existsSync(file)) {
                try {
                    const content = fs.readFileSync(file, 'utf8');
                    
                    // 檢查 Firebase 配置
                    const hasConfig = /firebaseConfig\s*=\s*\{/.test(content);
                    const hasApiKey = /apiKey\s*:/.test(content);
                    const hasProjectId = /projectId\s*:/.test(content);
                    const hasInitializeFunction = /function\s+initializeFirebase/.test(content);
                    
                    const isConfigValid = hasConfig && hasApiKey && hasProjectId && hasInitializeFunction;
                    
                    this.logTest(
                        `Firebase 配置: ${file}`,
                        isConfigValid,
                        isConfigValid ? '配置完整' : '配置不完整'
                    );
                } catch (error) {
                    this.logTest(`Firebase 配置: ${file}`, false, `讀取文件失敗: ${error.message}`);
                }
            } else {
                this.logTest(`Firebase 配置: ${file}`, false, '文件不存在');
            }
        });
    }

    // 檢查遊戲數據
    testGameData() {
        console.log('\n🎮 檢查遊戲數據...');
        
        if (fs.existsSync('script.js')) {
            try {
                const content = fs.readFileSync('script.js', 'utf8');
                
                // 檢查遊戲相關數據
                const hasLocationData = /const\s+locationData\s*=/.test(content);
                const hasQuizData = /const\s+quizData\s*=/.test(content);
                const hasGameFunctions = /function\s+.*Game/.test(content) || /function\s+.*Quiz/.test(content);
                
                const hasGameData = hasLocationData || hasQuizData || hasGameFunctions;
                
                this.logTest(
                    '遊戲數據結構',
                    hasGameData,
                    hasGameData ? '包含遊戲數據' : '缺少遊戲數據'
                );
            } catch (error) {
                this.logTest('遊戲數據結構', false, `讀取文件失敗: ${error.message}`);
            }
        } else {
            this.logTest('遊戲數據結構', false, 'script.js 文件不存在');
        }
    }

    // 檢查依賴項
    testDependencies() {
        console.log('\n📦 檢查依賴項...');
        
        const htmlFiles = ['game.html', 'index.html'];
        
        htmlFiles.forEach(file => {
            if (fs.existsSync(file)) {
                try {
                    const content = fs.readFileSync(file, 'utf8');
                    
                    // 檢查外部依賴
                    const hasFirebase = /firebasejs/.test(content);
                    const hasBootstrap = /bootstrap/.test(content);
                    const hasJQuery = /jquery/.test(content);
                    
                    this.logTest(
                        `外部依賴: ${file}`,
                        hasFirebase || hasBootstrap || hasJQuery,
                        `Firebase: ${hasFirebase ? '✓' : '✗'}, Bootstrap: ${hasBootstrap ? '✓' : '✗'}, jQuery: ${hasJQuery ? '✓' : '✗'}`
                    );
                } catch (error) {
                    this.logTest(`外部依賴: ${file}`, false, `讀取文件失敗: ${error.message}`);
                }
            } else {
                this.logTest(`外部依賴: ${file}`, false, '文件不存在');
            }
        });
    }

    // 生成測試報告
    generateReport() {
        const totalTime = Date.now() - this.startTime;
        const passedTests = this.results.filter(r => r.passed).length;
        const totalTests = this.results.length;
        const successRate = totalTests > 0 ? (passedTests / totalTests) * 100 : 0;
        
        console.log('\n' + '='.repeat(60));
        console.log('📊 快速測試報告');
        console.log('='.repeat(60));
        
        console.log(`總測試時間: ${totalTime}ms`);
        console.log(`總測試數: ${totalTests}`);
        console.log(`通過: ${passedTests}`);
        console.log(`失敗: ${totalTests - passedTests}`);
        console.log(`成功率: ${successRate.toFixed(1)}%`);
        
        console.log('\n🔍 失敗測試詳情:');
        const failedTests = this.results.filter(test => !test.passed);
        if (failedTests.length > 0) {
            failedTests.forEach(test => {
                console.log(`  ❌ ${test.name}: ${test.details}`);
            });
        } else {
            console.log('  ✅ 所有測試都通過了！');
        }
        
        // 保存結果到文件
        const reportData = {
            timestamp: Date.now(),
            duration: totalTime,
            results: this.results,
            summary: {
                totalTests,
                passed: passedTests,
                failed: totalTests - passedTests,
                successRate
            }
        };
        
        try {
            fs.writeFileSync('quick_test_report.json', JSON.stringify(reportData, null, 2));
            console.log('\n💾 測試報告已保存到 quick_test_report.json');
        } catch (error) {
            console.error('保存測試報告失敗:', error.message);
        }
    }

    // 執行所有測試
    runAllTests() {
        console.log('🚀 開始 STEM by Me 項目快速測試...');
        console.log('='.repeat(60));
        
        this.testRequiredFiles();
        this.testFileSizes();
        this.testDirectoryStructure();
        this.testJavaScriptSyntax();
        this.testHTMLStructure();
        this.testFirebaseConfig();
        this.testGameData();
        this.testDependencies();
        
        this.generateReport();
    }
}

// 如果直接運行此腳本
if (require.main === module) {
    const quickTest = new QuickTest();
    quickTest.runAllTests();
}

// 導出測試類
module.exports = QuickTest;
