import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { productService } from '@/services/productService';
import { getImageUrl } from '@/lib/getImageUrl';
import { Product } from '@/types/product';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductInfo from '@/components/ProductInfo';
import ProductTabs from '@/components/ProductTabs';
import RelatedProducts from '@/components/RelatedProducts';


interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    const response = await productService.getProductBySlug(slug);
    
    if (!response.success || !response.data.product) {
      return {
        title: 'Sản phẩm không tìm thấy',
      };
    }
    
    const product = response.data.product;
    
    return {
      title: `${product.name} | Mandala Store`,
      description: product.shortDescription || product.description.substring(0, 160),
      openGraph: {
        title: product.name,
        description: product.shortDescription || product.description,
        images: [getImageUrl(product.images[0])],
      },
    };
  } catch (error) {
    return {
      title: 'Sản phẩm không tìm thấy',
    };
  }
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  
  let product: Product | null = null;
  let relatedProducts: Product[] = [];
  
  try {
    const response = await productService.getProductBySlug(slug);
    
    if (!response.success || !response.data.product) {
      notFound();
    }
    
    product = response.data.product;
    relatedProducts = response.data.relatedProducts || [];
  } catch (error) {
    console.error('Error fetching product:', error);
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };

  const discountPercentage = product.salePrice 
    ? Math.round(((product.price - product.salePrice) / product.price) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-muted-foreground">
          <span>Trang chủ</span> → <span>Sản phẩm</span> → <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Images */}
          <div>
            <ProductImageGallery 
              images={product.images} 
              productName={product.name}
              description={product.description}
              shortDescription={product.shortDescription}
            />
          </div>

          {/* Product Info */}
          <div>
            <ProductInfo 
              name={product.name}
              price={product.price}
              salePrice={product.salePrice}
              description={product.description}
              shortDescription={product.shortDescription}
              attributes={product.attributes}
              rating={product.rating}
              stock={product.stock}
              tags={product.tags}
              discountPercentage={discountPercentage}
            />
          </div>

          {/* Related Products */}
          <div>
            {relatedProducts && relatedProducts.length > 0 && (
              <RelatedProducts products={relatedProducts} />
            )}
          </div>
        </div>

        {/* Product Details Section */}
        <div className="mt-12">
          <ProductTabs 
            description={product.description}
            attributes={product.attributes}
            rating={product.rating}
          />
        </div>
      </div>
    </div>
  );
}
