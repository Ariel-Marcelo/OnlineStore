import React from "react";

const ProductCard = () => {
    return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src="imagen-del-producto.jpg" alt="Producto" className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Nombre del producto</h3>
                <p className="text-gray-600 mb-4">Descripción del producto</p>
                <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-semibold">$99.99</span>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Agregar al carrito</button>
                </div>
            </div>
    </div>
        );
};

export { ProductCard };