export class Quoter {
  constructor(account) {
    this.account = account;
  }

  async add(text) {
    await this.account.contract.add(text);
  }

  async get() {
    return await this.account.contract.getQuotes();
  }
}
