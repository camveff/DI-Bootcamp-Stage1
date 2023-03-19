from flask import Flask, render_template
from products_data import retrieve_all_products, retrieve_requested_product

app = Flask(__name__)

@app.route('/')
def welcome():
    return render_template('welcome.html')

@app.route('/products')
def show_products():
    all_products = retrieve_all_products()
    return render_template('miniproject.html', all_products=all_products)

@app.route('/products/<product_id>')
def show_product(product_id):
    requested_product = retrieve_requested_product(product_id)
    return render_template('miniproject.html', requested_product=requested_product)

cart_items = []

@app.route('/')
def welcome():
    return render_template('miniproject.html')

@app.route('/products')
def show_products():
    all_products = retrieve_all_products()
    return render_template('products.html', all_products=all_products)

@app.route('/products/<product_id>')
def show_product(product_id):
    requested_product = retrieve_requested_product(product_id)
    return render_template('product.html', requested_product=requested_product)

@app.route('/cart')
def show_cart():
    total_price = sum([item['price'] for item in cart_items])
    return render_template('cart.html', cart_items=cart_items, total_price=total_price)

@app.route('/add_product_to_cart/<product_id>')
def add_to_cart(product_id):
    requested_product = retrieve_requested_product(product_id)
    if requested_product:
        cart_items.append(requested_product)
    return 'Product added to cart'

@app.route('/delete_product_from_cart/<product_id>')
def delete_from_cart(product_id):
    for item in cart_items:
        if item['id'] == product_id:
            cart_items.remove(item)
            break
    return 'Product deleted from cart'