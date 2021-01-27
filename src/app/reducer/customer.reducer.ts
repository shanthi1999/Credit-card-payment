import { Action } from '@ngrx/store';
import { Customer } from '../model/customer.model';
import * as CustomerAction from '../action/customer.action';

const initialState:Customer=
        {  
        cardNumbers:1234567890123456,
        cardNames:"shanthi",
        cardExpiry:"2020-08",
        cardCcv:334,
        cardAmount:2000 
    }
    
    export function reducer(state:Customer[]=[initialState],action:CustomerAction.Actions):Customer[]{
        switch(action.type){
            case CustomerAction.ADD_CARD:
                return [...state,action.payload];
            default:
                return state;   
        }
    }

