"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowLeft, Copy, Check } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const CheckoutPage: FC = () => {
  const items = useCartStore((state) => state.items);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const clearCart = useCartStore((state) => state.clearCart);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const accountDetails = {
    bankName: "Bank Name",
    accountTitle: "Urwah Trends",
    accountNumber: "1234567890123456",
    iban: "PK00ABCD1234567890123456",
    branchCode: "1234",
    branchName: "Main Branch",
    phoneNumber: "+92 300 1234567",
    easyPaisa: "+92 300 1234567",
    jazzCash: "+92 300 1234567",
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleOrderComplete = () => {
    clearCart();
    alert("Order placed successfully! Please complete the payment using the account details below.");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Sparkles className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Urwah Trends
                </h1>
              </Link>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">No items in cart</h2>
            <p className="text-muted-foreground mb-8">
              Add items to your cart before checkout
            </p>
            <Link href="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Urwah Trends
              </h1>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/cart">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cart
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.product.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-4">
                    Please transfer the total amount to one of the following
                    accounts. After payment, send a screenshot of the transaction
                    to our WhatsApp number.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Bank Account Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Bank Name:</span>
                          <span className="font-medium">{accountDetails.bankName}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Account Title:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{accountDetails.accountTitle}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleCopy(accountDetails.accountTitle, "accountTitle")
                              }
                            >
                              {copiedField === "accountTitle" ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Account Number:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium font-mono">
                              {accountDetails.accountNumber}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleCopy(accountDetails.accountNumber, "accountNumber")
                              }
                            >
                              {copiedField === "accountNumber" ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">IBAN:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium font-mono">
                              {accountDetails.iban}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleCopy(accountDetails.iban, "iban")}
                            >
                              {copiedField === "iban" ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Branch:</span>
                          <span className="font-medium">
                            {accountDetails.branchName} ({accountDetails.branchCode})
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Mobile Banking</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">EasyPaisa:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium font-mono">
                              {accountDetails.easyPaisa}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleCopy(accountDetails.easyPaisa, "easyPaisa")
                              }
                            >
                              {copiedField === "easyPaisa" ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">JazzCash:</span>
                          <div className="flex items-center gap-2">
                            <span className="font-medium font-mono">
                              {accountDetails.jazzCash}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() =>
                                handleCopy(accountDetails.jazzCash, "jazzCash")
                              }
                            >
                              {copiedField === "jazzCash" ? (
                                <Check className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Contact</h4>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">WhatsApp:</span>
                        <div className="flex items-center gap-2">
                          <span className="font-medium font-mono">
                            {accountDetails.phoneNumber}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              handleCopy(accountDetails.phoneNumber, "phoneNumber")
                            }
                          >
                            {copiedField === "phoneNumber" ? (
                              <Check className="h-4 w-4" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Order Total</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)
                    </span>
                    <span className="font-semibold">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                </div>
                <div className="border-t pt-4 mb-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                </div>
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleOrderComplete}
                >
                  Confirm Order
                </Button>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  After payment, please send transaction screenshot to our
                  WhatsApp number
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;

