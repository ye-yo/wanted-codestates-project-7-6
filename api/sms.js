import axios from 'axios';
import crypto from 'crypto';
import 'dotenv/config';

const SERVICE_ID = process.env.NAVER_SERVICE_ID;
const ACCESS_KEY = process.env.NAVER_ACCESS_KEY;
const SECRET_KEY = process.env.NAVER_SECRET_KEY;
const SENDER = process.env.NAVER_PHONE_NUMBER;
const URL1 = `https://sens.apigw.ntruss.com/sms/v2/services/${SERVICE_ID}/messages`;
const URL2 = `/sms/v2/services/${SERVICE_ID}/messages`;

const signature = () => {
  const method = 'POST';
  const space = ' ';
  const newLine = '\n';
  const timestamp = Date.now().toString();

  const hmac = crypto.createHmac('sha256', SECRET_KEY);
  const message = [method, space, URL2, newLine, timestamp, newLine, ACCESS_KEY].join('');
  return hmac.update(message).digest('base64').toString();
};

export default async function handler(req, res) {
  res.status(200);
  try {
    const { to, content } = req.body;
    if (!to) return res.send({ ok: false, reason: '송신 번호를 입력하세요.' });
    if (!content) return res.send({ ok: false, reason: '전송 내용을 입력하세요.' });

    const {
      data: { statusCode },
    } = await axios({
      method: 'POST',
      json: true,
      url: URL1,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-ncp-iam-access-key': ACCESS_KEY,
        'x-ncp-apigw-timestamp': Date.now().toString(),
        'x-ncp-apigw-signature-v2': signature(),
      },
      data: {
        type: 'SMS',
        contentType: 'COMM',
        countryCode: '82',
        from: SENDER,
        content,
        messages: [{ to }],
      },
    });

    if (/^20\d$/.test(statusCode)) return res.send(JSON.stringify({ ok: true }));
    else return res.send(JSON.stringify({ ok: false, reason: `요청 실패 (Code: ${statusCode})` }));
  } catch (error) {
    // console.error(error);
    return res.send(JSON.stringify({ ok: false, reason: 'API 요청이 거부되었습니다.' }));
  }
}
