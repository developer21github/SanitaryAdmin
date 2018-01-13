import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {CategoryService} from './category.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-CategoryIndex',
    templateUrl: './categoryIndex.component.html'
})

export class CategoryIndexComponent implements OnInit{

    category = {};

    constructor(private toastr: ToastrService,
                private router: Router,
                private catgeoryService: CategoryService) {
    }

    ngOnInit() {
    }

    getCategory() {
        this.catgeoryService.getCategory().subscribe(res => {
            this.category = res;
        });
    }

    deleteCategory(id) {
        this.catgeoryService.deleteCategory(id).subscribe(res => {
                this.toastr.success('category has been deleted succefully', 'success');
                this.router.navigate(['/category/index-category']);
            },
            error => console.log(error)
        );
    }
}