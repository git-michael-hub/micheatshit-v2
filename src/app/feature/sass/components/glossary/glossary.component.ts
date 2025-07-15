import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sass-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.css']
})
export class SassGlossaryComponent implements OnInit {
  components = [
    {
      "name": "Consumer",
      "file_location": "components/consumer",
      "url": "consumer",
      "category": "Major Entities"
    },
    {
      "name": "Producer",
      "file_location": "components/producer",
      "url": "producer",
      "category": "Major Entities"
    },
    {
      "name": "Subscription",
      "file_location": "components/subscription",
      "url": "subscription",
      "category": "Major Entities"
    },
    {
      "name": "Observable",
      "file_location": "components/observable",
      "url": "observable",
      "category": "Major Entities"
    },
    {
      "name": "Observer",
      "file_location": "components/observer",
      "url": "observer",
      "category": "Major Entities"
    },
    {
      "name": "Subscribe",
      "file_location": "components/subscribe",
      "url": "subscribe",
      "category": "Major Actions"
    },
    {
      "name": "Finalization",
      "file_location": "components/finalization",
      "url": "finalization",
      "category": "Major Actions"
    },
    {
      "name": "Unsubscription",
      "file_location": "components/unsubscription",
      "url": "unsubscription",
      "category": "Major Actions"
    },
    {
      "name": "Observation",
      "file_location": "components/observation",
      "url": "observation",
      "category": "Major Actions"
    },
    {
      "name": "Observation Chain",
      "file_location": "components/observation-chain",
      "url": "observation-chain",
      "category": "Major Actions"
    },
    {
      "name": "Next",
      "file_location": "components/next",
      "url": "next",
      "category": "Major Actions"
    },
    {
      "name": "Error",
      "file_location": "components/error",
      "url": "error",
      "category": "Major Actions"
    },
    {
      "name": "Complete",
      "file_location": "components/complete",
      "url": "complete",
      "category": "Major Actions"
    },
    {
      "name": "Notification",
      "file_location": "components/notification",
      "url": "notification",
      "category": "Major Actions"
    },
    {
      "name": "Multicast",
      "file_location": "components/multicast",
      "url": "multicast",
      "category": "Major Concepts"
    },
    {
      "name": "Unicast",
      "file_location": "components/unicast",
      "url": "unicast",
      "category": "Major Concepts"
    },
    {
      "name": "Cold",
      "file_location": "components/cold",
      "url": "cold",
      "category": "Major Concepts"
    },
    {
      "name": "Hot",
      "file_location": "components/hot",
      "url": "hot",
      "category": "Major Concepts"
    },
    {
      "name": "Push",
      "file_location": "components/push",
      "url": "push",
      "category": "Major Concepts"
    },
    {
      "name": "Pull",
      "file_location": "components/pull",
      "url": "pull",
      "category": "Major Concepts"
    },
    {
      "name": "Operator",
      "file_location": "components/operator",
      "url": "operator",
      "category": "Minor Entities"
    },
    {
      "name": "Operator Function",
      "file_location": "components/operator-function",
      "url": "operator-function",
      "category": "Minor Entities"
    },
    {
      "name": "Operation",
      "file_location": "components/operation",
      "url": "operation",
      "category": "Minor Entities"
    },
    {
      "name": "Stream",
      "file_location": "components/stream",
      "url": "stream",
      "category": "Minor Entities"
    },
    {
      "name": "Source",
      "file_location": "components/source",
      "url": "source",
      "category": "Minor Entities"
    },
    {
      "name": "Observable Inputs",
      "file_location": "components/observable-inputs",
      "url": "observable-inputs",
      "category": "Minor Entities"
    },
    {
      "name": "Notifier",
      "file_location": "components/notifier",
      "url": "notifier",
      "category": "Minor Entities"
    },
    {
      "name": "Inner Source",
      "file_location": "components/inner-source",
      "url": "inner-source",
      "category": "Minor Entities"
    },
    {
      "name": "Partial Observer",
      "file_location": "components/partial-observer",
      "url": "partial-observer",
      "category": "Minor Entities"
    },
    {
      "name": "Unhandled Errors",
      "file_location": "components/unhandled-errors",
      "url": "unhandled-errors",
      "category": "Others"
    },
    {
      "name": "Producer Interference",
      "file_location": "components/producer-interference",
      "url": "producer-interference",
      "category": "Others"
    },
    {
      "name": "Upstream And Downstream",
      "file_location": "components/upstream-downstream",
      "url": "upstream-downstream",
      "category": "Others"
    }
  ];

  searchTerm = '';

  constructor() { }

  fn(s: {name: string}) {
    // Placeholder for future state management or UI interaction
    console.log(s);
  }

  getCategories(): string[] {
    const categories = [...new Set(this.components.map(item => item.category))];
    return categories.sort();
  }

  getItemsByCategory(category: string): any[] {
    return this.components.filter(item => item.category === category);
  }

  ngOnInit() {
  }

  // - search
  toSearch(term: string): void {
    console.log('term', term)
    this.searchTerm = term;
  }
}
