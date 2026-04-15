import https from 'https';

type SendEmailParams = {
  from: string;
  to: string[];
  cc?: string[];
  replyTo?: string;
  subject: string;
  html: string;
};

type SendEmailResult =
  | { success: true; id: string }
  | { success: false; error: string };

export function sendEmail(params: SendEmailParams): Promise<SendEmailResult> {
  return new Promise((resolve) => {
    const data = JSON.stringify({
      from: params.from,
      to: params.to,
      cc: params.cc,
      reply_to: params.replyTo,
      subject: params.subject,
      html: params.html,
    });

    const req = https.request(
      {
        hostname: 'api.resend.com',
        port: 443,
        path: '/emails',
        method: 'POST',
        family: 4,
        timeout: 10000,
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
          'User-Agent': 'BALAFON/1.0',
        },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => { body += chunk; });
        res.on('end', () => {
          try {
            const parsed = JSON.parse(body);
            if (res.statusCode && res.statusCode >= 400) {
              resolve({ success: false, error: parsed.message || body });
            } else {
              resolve({ success: true, id: parsed.id || '' });
            }
          } catch {
            resolve({ success: false, error: body });
          }
        });
      },
    );

    req.on('timeout', () => {
      req.destroy();
      resolve({ success: false, error: 'Request timeout' });
    });

    req.on('error', (err) => {
      resolve({ success: false, error: err.message });
    });

    req.write(data);
    req.end();
  });
}
