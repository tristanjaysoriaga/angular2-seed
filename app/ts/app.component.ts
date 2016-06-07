import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {ConfigService} from './config.service'

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { 
	mainHeading = ConfigService.MAIN_HEADING;
}