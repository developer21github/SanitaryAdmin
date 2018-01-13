import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './admin/home/home.component';
import {CategoryComponent} from './admin/category/category.component';
import {CategoryIndexComponent} from './admin/category/categoryIndex.component';
import {ProductComponent} from './admin/product/product.component';
import {ProfileComponent} from './admin/profile/profile.component';
import {ProductIndexComponent} from './admin/product/productIndex.component';
import {LoginComponent} from './admin/login/login.component';


const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {
        path: 'category',
        children: [
            {path: '', redirectTo: 'index-category', pathMatch: 'full'},
            {path: 'manage-category', component: CategoryComponent},
            {path: 'index-category', component: CategoryIndexComponent}
        ]
    },
    {
        path: 'product',
        children: [
            {path: '', redirectTo: 'manage-product', pathMatch: 'full'},
            {path: 'manage-product', component: ProductComponent},
            {path: 'index-product', component: ProductIndexComponent},
        ]
    },
    {path: 'product', component: ProductComponent},
    {path: 'productIndex', component: ProductIndexComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class RoutingModule {
}
