import { cryptoSerializer } from '@/shared/libs';

const piniaCryptoSerializer = (secretKey: string) => {
  const baseCrypto = cryptoSerializer(secretKey);

  return {
    serialize: (data: Record<string, unknown>): string => {
      // Pass the object directly - your cryptoSerializer will JSON.stringify it
      return baseCrypto.serialize(data as unknown as string);
    },
    deserialize: (payload: string): Record<string, unknown> => {
      try {
        // Your cryptoSerializer returns the parsed object directly
        const result = baseCrypto.deserialize(payload);
        return result && typeof result === 'object' ? result : {};
      } catch (error) {
        console.error('Failed to deserialize encrypted data:', error);
        return {};
      }
    },
  };
};

export default piniaCryptoSerializer;
