export interface Product {
    id: string;
    name: string;
    description: string;
    image_url: string;
    slug: string;   // forma de acessar o endereço
    price: number;
    created_at: string;
}