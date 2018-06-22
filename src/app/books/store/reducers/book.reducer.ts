import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Book } from '../../models/book';
import { CollectionActionsUnion, CollectionActionTypes } from '../actions/collection.actions';
import { BookActionsUnion, BookActionTypes } from '../actions/book.actions';

export interface State extends EntityState<Book> {
  selectedBookId: string | null;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
  selectId: (book: Book) => book.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedBookId: null,
});

export function reducer(state = initialState, action: BookActionsUnion | CollectionActionsUnion): State {
  switch (action.type) {
    case BookActionTypes.SearchComplete:
    case CollectionActionTypes.LoadSuccess: {
      return adapter.addMany(action.payload, {
        ...state,
        selectedBookId: state.selectedBookId,
      });
    }

    case BookActionTypes.Load: {
      return adapter.addOne(action.payload, {
        ...state,
        selectedBookId: state.selectedBookId,
      });
    }

    case BookActionTypes.Select: {
      return {
        ...state,
        selectedBookId: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.selectedBookId;
