import {Injectable} from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

    constructor(private http: HttpClient) {

    }

    getCategory(): Observable<any> {
        return this.http.get('').map(res => res);
    }

    getCategoryById(): Observable<any> {
        return this.http.get('').map(res => res);
    }

    addCategory(category): Observable<any> {
        return this.http.post('', JSON.stringify(category));
    }

    deleteCategory(id): Observable<any> {
        return this.http.post('', id);
    }

}