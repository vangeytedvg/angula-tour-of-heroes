import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    // Adds a message to the cache
    this.messages.push(message);
  }

  clear() {
    // Clear the cache
    this.messages = [];
  }
}
