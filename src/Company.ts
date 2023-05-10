import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  s;

  markerContent(): string {
    const content = `
    <div>
      <h3>Company: ${this.companyName}</h3>
      <p>${this.catchPhrase}</p>
    </div>
    `;

    return content;
  }
}
