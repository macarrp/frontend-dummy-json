export interface ResponsePaginated<T> {
    limit: number;
    products: T[];
    carts: T[]; // TODO: Unificar
    skip: number;
    total: number;
}