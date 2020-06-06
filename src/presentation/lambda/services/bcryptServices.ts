import { CryptographyGateway } from "../../../business/gateway/cryptographyGateway";

export class BcryptService implements CryptographyGateway {

  async encrypt(word: string): Promise<string> {
    return word
  }

  async compare(word: string, hash: string): Promise<boolean> {

    return word === hash
  }
}