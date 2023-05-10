import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    const content = `
    <div>
      <h3><span style='font-weight: 200'>User:</span> ${this.name}</h3>
    </div>
    `;
    return content;
  }
}
