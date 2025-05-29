//Describe product's data structrue
interface Product {
    code: string;
    name: string;
    description?: string;
    summary?: string;
    price?: {
      currencyIso?: string;
      value?: number;
      formattedValue?: string;
    };
    images?: Array<{
      url: string;
      altText?: string;
    }>;
    stock?: {
      stockLevelStatus?: {
        code?: string;
      };
      stockLevel?: number;
    };
    purchasable?: boolean;
    baseProduct?: string;
    categories?: Array<{
      code: string;
      name: string;
    }>;
  }
  
  export default Product;

  