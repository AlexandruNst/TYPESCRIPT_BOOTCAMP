import React, { useRef } from 'react'

interface ShoppingListProps {
    onAddItem(item: string, quantity: number): void;
}

export default function ShoppingListForm({ onAddItem }: ShoppingListProps): JSX.Element {

    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const newProduct = productInputRef.current!.value;
        const newQuantity = parseInt(quantityInputRef.current!.value);
        onAddItem(newProduct, newQuantity);
        productInputRef.current!.value = "";
        quantityInputRef.current!.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder='Product Name' ref={productInputRef} />
            <input type="number" name="" id="" min={0} placeholder='Quantity' ref={quantityInputRef} />
            <button type="submit">Add item</button>
        </form>
    );
}