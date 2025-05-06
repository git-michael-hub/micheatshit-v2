import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from 'src/app/utils/services/unsubscribe.service';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-immutability',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './immutability.component.html',
  styleUrls: ['./immutability.component.scss']
})
export class ImmutabilityComponent extends UnsubscribeService implements OnInit {
  selectedTab = 1;

  // Template reference variables
  code_1_ref: any = { hidden: true };
  code_2_ref: any = { hidden: true };
  code_3_ref: any = { hidden: true };
  code_4_ref: any = { hidden: true };
  code_5_ref: any = { hidden: true };
  code_6_ref: any = { hidden: true };

  // Template outlet references
  notesRef: any;
  bestRef: any;
  prosConsRef: any;
  topicsRef: any;

  // Example code snippets
  code_1 = `// Immutable operations with arrays in Angular 19
// ❌ Mutable approach (avoid)
updateTodos(newTodo: Todo) {
  // Directly modifying the array
  this.todos.push(newTodo);

  // This won't trigger OnPush change detection
  // or properly update signal-based templates
}

// ✅ Immutable approach (recommended)
updateTodos(newTodo: Todo) {
  // Create a new array with all existing items plus the new one
  this.todos = [...this.todos, newTodo];

  // Or using signal APIs in Angular 19
  this.todos.update(todos => [...todos, newTodo]);

  // This will trigger change detection in OnPush components
  // and properly update signal-based templates
}`;

  code_2 = `// Immutable operations with objects in Angular 19
// ❌ Mutable approach (avoid)
updateUser(name: string) {
  // Directly modifying object properties
  this.user.name = name;
  this.user.updatedAt = new Date();

  // This won't trigger OnPush change detection
  // or properly update signal-based templates
}

// ✅ Immutable approach (recommended)
updateUser(name: string) {
  // Create a new object with updated properties
  this.user = {
    ...this.user,
    name: name,
    updatedAt: new Date()
  };

  // Or using signal APIs in Angular 19
  this.user.update(user => ({
    ...user,
    name: name,
    updatedAt: new Date()
  }));

  // This will trigger change detection in OnPush components
  // and properly update signal-based templates
}`;

  code_3 = `// Using immutable data structures with TypeScript
// Define readonly types
type ReadonlyTodo = Readonly<{
  id: number;
  title: string;
  completed: boolean;
}>;

// Use readonly arrays
const todos: ReadonlyArray<ReadonlyTodo> = [
  { id: 1, title: 'Learn Angular 19', completed: false },
  { id: 2, title: 'Build an app', completed: false }
];

// This won't compile - trying to modify a readonly array
// todos.push({ id: 3, title: 'Deploy app', completed: false });

// Instead, create a new array
const newTodos = [
  ...todos,
  { id: 3, title: 'Deploy app', completed: false }
];

// Using readonly modifiers
function processData(data: readonly string[]) {
  // Can't modify the array inside this function
  // data.push('new item'); // Error

  // Must return a new array instead
  return [...data, 'new item'];
}`;

  code_4 = `// Immutable updates with Angular 19 signals
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-task-list',
  template: \`
    <div>
      <h2>Task List</h2>
      <ul>
        <li *ngFor="let task of tasks()">
          {{ task.title }}
          <button (click)="toggleComplete(task.id)">
            {{ task.completed ? 'Mark Incomplete' : 'Mark Complete' }}
          </button>
          <button (click)="deleteTask(task.id)">Delete</button>
        </li>
      </ul>
      <input #newTask placeholder="Add new task">
      <button (click)="addTask(newTask.value); newTask.value = ''">Add</button>
    </div>
  \`
})
export class TaskListComponent {
  // Signal with initial state
  tasks = signal([
    { id: 1, title: 'Learn Angular 19', completed: false },
    { id: 2, title: 'Build an app', completed: false }
  ]);

  nextId = signal(3);

  // Immutable add operation
  addTask(title: string) {
    if (!title.trim()) return;

    this.tasks.update(tasks => [
      ...tasks,
      { id: this.nextId(), title, completed: false }
    ]);

    this.nextId.update(id => id + 1);
  }

  // Immutable toggle operation
  toggleComplete(id: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Immutable delete operation
  deleteTask(id: number) {
    this.tasks.update(tasks =>
      tasks.filter(task => task.id !== id)
    );
  }
}`;

  code_5 = `// Implementing immutability with Redux-inspired patterns in Angular 19
import { Component, signal } from '@angular/core';

// Define app state interface
interface AppState {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  loading: boolean;
}

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Action types
type Action =
  | { type: 'ADD_TODO', payload: string }
  | { type: 'TOGGLE_TODO', payload: number }
  | { type: 'DELETE_TODO', payload: number }
  | { type: 'SET_FILTER', payload: 'all' | 'active' | 'completed' }
  | { type: 'SET_LOADING', payload: boolean };

@Component({
  selector: 'app-todo-redux',
  template: \`<!-- Template omitted for brevity -->\`
})
export class TodoReduxComponent {
  // Initial state
  private state = signal<AppState>({
    todos: [],
    filter: 'all',
    loading: false
  });

  // Derived state using computed
  todos = computed(() => {
    const state = this.state();
    const filter = state.filter;

    return state.todos.filter(todo => {
      if (filter === 'all') return true;
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    });
  });

  loading = computed(() => this.state().loading);
  filter = computed(() => this.state().filter);

  // Pure reducer function
  private reducer(state: AppState, action: Action): AppState {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              text: action.payload,
              completed: false
            }
          ]
        };

      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        };

      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };

      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload
        };

      case 'SET_LOADING':
        return {
          ...state,
          loading: action.payload
        };

      default:
        return state;
    }
  }

  // Dispatch method
  dispatch(action: Action) {
    this.state.update(state => this.reducer(state, action));
  }

  // Action creators
  addTodo(text: string) {
    this.dispatch({ type: 'ADD_TODO', payload: text });
  }

  toggleTodo(id: number) {
    this.dispatch({ type: 'TOGGLE_TODO', payload: id });
  }

  deleteTodo(id: number) {
    this.dispatch({ type: 'DELETE_TODO', payload: id });
  }

  setFilter(filter: 'all' | 'active' | 'completed') {
    this.dispatch({ type: 'SET_FILTER', payload: filter });
  }
}`;

  code_6 = `// Immutability with built-in control flow in Angular 19
import { Component, signal } from '@angular/core';

interface Task {
  id: number;
  title: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}

@Component({
  selector: 'app-task-manager',
  template: \`
    <div class="task-list">
      <h2>Task Manager</h2>

      <div class="filters">
        <select #priorityFilter (change)="setFilter(priorityFilter.value)">
          <option value="all">All Priorities</option>
          <option value="high">High Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="low">Low Priority</option>
        </select>

        <button (click)="toggleShowCompleted()">
          {{ showCompleted() ? 'Hide' : 'Show' }} Completed
        </button>
      </div>

      <!-- Using Angular 19's built-in control flow -->
      @if (loading()) {
        <div class="loading">Loading tasks...</div>
      } @else {
        <ul class="tasks">
          @for (task of filteredTasks(); track task.id) {
            <li [class.completed]="task.completed">
              <span class="priority" [class]="task.priority">
                {{ task.priority }}
              </span>

              <span class="title">{{ task.title }}</span>

              <div class="actions">
                <button (click)="toggleTask(task.id)">
                  {{ task.completed ? '✓' : '○' }}
                </button>

                @if (!task.completed) {
                  <button (click)="changePriority(task.id)">
                    Priority ↑
                  </button>
                }

                <button (click)="removeTask(task.id)">🗑️</button>
              </div>
            </li>
          } @empty {
            <li class="empty">No tasks match the current filter</li>
          }
        </ul>
      }

      <div class="new-task">
        <input #newTask placeholder="Add new task">
        <select #priority>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button (click)="addTask(newTask.value, priority.value)">Add</button>
      </div>
    </div>
  \`
})
export class TaskManagerComponent {
  // State signals
  private tasks = signal<Task[]>([]);
  private filter = signal<string>('all');
  showCompleted = signal<boolean>(true);
  loading = signal<boolean>(false);

  // Computed signal for filtered tasks
  filteredTasks = computed(() => {
    return this.tasks()
      .filter(task => {
        // Filter by priority
        if (this.filter() !== 'all' && task.priority !== this.filter()) {
          return false;
        }

        // Filter by completion status
        if (!this.showCompleted() && task.completed) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        // Sort by priority
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
  });

  // Immutable task operations
  addTask(title: string, priority: string) {
    if (!title.trim()) return;

    this.tasks.update(tasks => [
      ...tasks,
      {
        id: Date.now(),
        title: title.trim(),
        priority: priority as 'low' | 'medium' | 'high',
        completed: false
      }
    ]);
  }

  removeTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }

  toggleTask(id: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  changePriority(id: number) {
    const priorityOrder = ['low', 'medium', 'high'] as const;

    this.tasks.update(tasks =>
      tasks.map(task => {
        if (task.id !== id) return task;

        const currentIndex = priorityOrder.indexOf(task.priority);
        const nextIndex = (currentIndex + 1) % priorityOrder.length;
        const newPriority = priorityOrder[nextIndex];

        return { ...task, priority: newPriority };
      })
    );
  }

  // Filter operations
  setFilter(filter: string) {
    this.filter.set(filter as any);
  }

  toggleShowCompleted() {
    this.showCompleted.update(value => !value);
  }
}`;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit() {
    // Initialize code snippets if needed
  }
}
