# team1
## Ecommerce Platform
### Problem Statement

Product management system manages the product details. Each products have unique product id, product name, description, prize and quantity.

The main components that make up the product management system are as follows:

1. User can able to view all the products in a listing manner with name, prize and description.

2. User can able to add those products into the cart based on the available quantity.

3. If product is out of stock then make that product as out of stock product and does not allow the user to add that product into the cart.

4. User should be able to filter the product by name and prize.

5. Cart should display the cart item count and total order value.

6. User can able to remove the products from the Cart. Based on the removal stock of the product should be updated.

7. User can check out his item and after checkout the items should be reduced from the product quantity

 ### problem approach
In order make this product management system work we are using spa rather than multipage functionality as it would require time to load pages and make it functional, 
where as spa takes a one time loading and does not make users wait to fetch the products.
## Architecture
### level 1
![1](https://user-images.githubusercontent.com/86972403/158614270-04d48882-9a42-4494-a571-279458eb58b8.png)
### level 2
![2](https://user-images.githubusercontent.com/86972403/158614304-666b1aed-60e4-413a-90ea-82d309e9551f.png)
### level 3
![3](https://user-images.githubusercontent.com/86972403/158617463-931ea512-025f-4db3-a711-b6d3d367271a.png)

### code components
#### client components
![cilent view](https://user-images.githubusercontent.com/86972403/158740729-790c254d-a945-4f91-b2f6-10d234522bdb.png)                      
#### server components
![serverview](https://user-images.githubusercontent.com/86972403/158740814-ee9d6e14-c8eb-4ca7-99e2-d7eca91ab6dc.png)



## Implementation
![Screenshot (57)](https://user-images.githubusercontent.com/86972403/158831276-2c73fc3d-e6a9-42c3-ae9a-1f0ab9c1ea9c.png)
![Screenshot (58)](https://user-images.githubusercontent.com/86972403/158831283-f21ba89f-c3cb-42b6-8d1d-159e764215e1.png)




###### Features
* Full featured shopping cart
* Home page view
* sign in /signup for Users.
* Product search feature.
* User profile with orders.
* Cart with product count and total price.
* Option to make user as admin.
* Admin profile with orders.
* Admin product management.
* Admin user management.
* Admin can change status of order.
* Admin user order list.
- Checkout process (shipping, payment method, etc).
- COD option.
* Count in stock reduces after order placed.
###### Install
 * git clone https://github.com/swethakuppili/team1
 
###### Run  clent and server
* cd client
> npm install
* cd server
> npm install

###### Run App
* npm start 
>   Open http://localhost:3000 to view cilent app in the browser.

>  Open http://localhost:8001 for server app .
## output app flow
#### signin / create account 
![signin](https://user-images.githubusercontent.com/86972403/158740285-a39ad199-48f6-4059-8071-e4811d2a93b8.png)
#### single product page
![single product page](https://user-images.githubusercontent.com/86972403/158740431-f7eb4c1b-1561-42a1-8946-e33f490eec41.png)
#### cart page
![cart page](https://user-images.githubusercontent.com/86972403/158740491-4606acc2-5292-4936-aaef-87911f1366ff.png)
#### order page
![order page](https://user-images.githubusercontent.com/86972403/158740563-09050c71-02b1-418c-8e3d-63a1f8ec236f.png)
#### create product
![creation product](https://user-images.githubusercontent.com/86972403/158740612-c8df2bbc-2f62-4e4b-8d98-9ef959f2d04a.png)
