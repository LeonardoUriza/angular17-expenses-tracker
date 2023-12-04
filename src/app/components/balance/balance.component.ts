import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Balance } from '../../models/balance.model';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss'
})
export class BalanceComponent {
  // Variable con tipo implicito
 @Input() title!: string ;
 @Input() balance!: Balance;
  // Variable con tipo explicito
  search = "iphone 15 Pro Max";
}
