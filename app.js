// ============================================================
//   QRコード生成アプリ
// ============================================================

const QRCode = require('qrcode');

// 変数初期化
var value = 'This is a pen.';
var file = 'qr.png';

// 起動引数からデータとファイル名を取得する
if (process.argv.length >= 3) {
    value = process.argv[2];
}
if (process.argv.length >= 4) {
    file = process.argv[3];
}

// QRコード画像をファイルに保存する
QRCode.toFile(file, value);
