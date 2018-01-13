import {Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from './category.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

    ngOnInit() {
    }

    constructor(private router: Router,
                private toastr: ToastrService,
                private categoryService: CategoryService) {
    }

    addCategory(category) {
        this.categoryService.addCategory(category).subscribe(res => {
                this.toastr.success('category has been added successfully.', 'success');
                this.router.navigate(['/category/index-category']);
            },
            error => console.log(error)
        );
    }

    cancelCategory() {
        this.router.navigate(['/category/index-category']);
    }
}

