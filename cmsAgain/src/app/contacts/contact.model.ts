export class Contact {
    
    // Constructor with public access modifiers for each parameter
    constructor(
       public id: string,
       public name: string,
       public email: string,
       public phone: string,
       public imageUrl: string,
       public group?: Contact[]
    ) {
      // Property initialization is now automatic due to public modifier
    }
  }
  