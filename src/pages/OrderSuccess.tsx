import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';

const OrderSuccess = () => {
  const navigate = useNavigate();

  // Clear cart from localStorage on successful order
  useEffect(() => {
    localStorage.removeItem('stepup-cart');
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h1 className="font-poppins text-4xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your purchase. Your order has been successfully placed.
            </p>
          </div>

          <Card className="glass mb-8">
            <CardHeader>
              <CardTitle className="font-poppins">What's Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/10">
                  <Package className="w-8 h-8 text-accent" />
                  <div className="text-left">
                    <h3 className="font-poppins font-semibold">Order Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll prepare your items for shipping
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/10">
                  <Truck className="w-8 h-8 text-accent" />
                  <div className="text-left">
                    <h3 className="font-poppins font-semibold">Free Shipping</h3>
                    <p className="text-sm text-muted-foreground">
                      Delivered within 3-5 business days
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  You'll receive an email confirmation with your order details and tracking information.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button 
              onClick={() => navigate('/')} 
              variant="accent" 
              size="lg"
              className="w-full md:w-auto"
            >
              <Home className="w-4 h-4 mr-2" />
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;