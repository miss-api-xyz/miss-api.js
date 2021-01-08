declare module 'miss-api.js' {
    export class MissAgent {
      constructor(key: string);
      get(endpoint: string): Promise<object>;
    }
    
    export const version: string;
}