import { NgModule } from '@angular/core';
import 
{ 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
}
from '@angular/material';
const modules = [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
]
@NgModule({
    imports:modules,
    exports:modules
})
export class MatModules{  }