
        class Node {
            constructor(data) {
                this.data = data;
                this.next = null;
            }
        }

        class LinkedList {
            constructor() {
                this.head = null;
                this.size = 0;
            }

            insert(data) {
                let newNode = new Node(data);
                if (!this.head) {
                    this.head = newNode;
                } else {
                    let current = this.head;
                    while (current.next) {
                        current = current.next;
                    }
                    current.next = newNode;
                }
                this.size++;
            }

            deleteLast() {
                if (!this.head) return;

                if (!this.head.next) {
                    this.head = null;
                } else {
                    let current = this.head;
                    while (current.next.next) {
                        current = current.next;
                    }
                    current.next = null;
                }
                if (this.size > 0) this.size--;
            }

            display() {
                let result = [];
                let current = this.head;
                while (current) {
                    result.push(current.data);
                    current = current.next;
                }
                return result;
            }
        }

        const list = new LinkedList();
        const elementSize = 8;

        function insertNode() {
            let num = parseInt(document.getElementById("numInput").value);
            if (!isNaN(num)) {
                list.insert(num);
                updateDisplay();
            } else {
                alert("Please enter a valid number");
            }
            document.getElementById("numInput").value = "";
        }

        function deleteNode() {
            list.deleteLast();
            updateDisplay();
        }

        function showMemory() {
            let memoryUsed = list.size * elementSize;
            document.getElementById("memoryDisplay").innerText = "Memory Used: " + memoryUsed + " bytes";
        }

        function updateDisplay() {
            document.getElementById("listDisplay").innerText = "Linked List: [" + list.display().join(", ") + "]";
            showMemory();
        }