#!/usr/bin/env node
// Dependency: This script requires Nodejs.
// Install Node: https://nodejs.org/en/download/

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Convert JS to JSON
// @raycast.mode silent

// Optional parameters:
// @raycast.argument1 { "type": "text", "placeholder": "js_text"}
// @raycast.packageName js-json-converter

// Documentation:
// @raycast.description Convert JS to JSON
// @raycast.author myano
// @raycast.authorURL https://github.com/nagauta
import { exec } from 'child_process';

// メイン処理部分を修正
try {
  const input = process.argv[2];
  if (!input) {
    console.error('入力が必要です');
    process.exit(1);
  }

  const result = convertJsonToString(input);
  
  // クリップボードにコピー
  exec(`echo '${result}' | pbcopy`, (error) => {
    if (error) {
      console.error('コピーに失敗しました:', error);
      return;
    }
    // 結果を表示
    console.log(result);
    console.log('\nコピーしました');
  });

} catch (error) {
  console.error('エラー:', error.message);
  process.exit(1);
}

function convertJsonToString(jsonObject) {
  const jsonString = JSON.stringify(jsonObject, null, 2);
  const escapedString = `${jsonString.replace(/\n/g, '\\n')}`;

  return escapedString;
}