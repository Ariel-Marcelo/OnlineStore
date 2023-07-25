import React from "react";
import { ProductCard } from "../components/ProductCard";
import { useRouter } from "next/router";

const LastProducts = () => {
    // Aquí recojo el id
    const router = useRouter();
    const { id } = router.query;
    console.log(id);
    
    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold">Últimos productos</h2>
            <div className="grid grid-cols-4 gap-4 mt-8">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export  { LastProducts };
