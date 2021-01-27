import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Customer } from '../model/customer.model';

export const ADD_CARD = '[Customer] Add'
export const REMOVE_CARD = '[Customer] Remove'

export class AddCard implements Action{
    readonly type = ADD_CARD

    constructor(public payload:Customer){}
}

export class RemoveCard implements Action{
    readonly type = REMOVE_CARD

    constructor(public payload:Customer){}
}

export type Actions = AddCard | RemoveCard;


