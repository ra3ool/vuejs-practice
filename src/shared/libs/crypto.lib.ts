import CryptoJS from 'crypto-js';

const cryptoSerializer = (secretKey: string) => ({
  serialize: (payload: Record<string, unknown>): string => {
    const data = JSON.stringify(payload);

    return CryptoJS.AES.encrypt(data, secretKey).toString();
  },
  deserialize: (payload: string): Record<string, unknown> => {
    if (!payload) return {};
    const bytes = CryptoJS.AES.decrypt(payload, secretKey);
    const json = bytes.toString(CryptoJS.enc.Utf8);
    return json ? JSON.parse(json) : {};
  },
});

export default cryptoSerializer;
