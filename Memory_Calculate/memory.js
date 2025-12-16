let vector = []; 

        function addNumber() {
            let num = parseInt(document.getElementById("numInput").value);
            if (!isNaN(num)) {
                vector.push(num);
                document.getElementById("vectorDisplay").innerText = "Vector: " + vector.join(", ");
            } else {
                alert("Please enter a valid number");
            }
            document.getElementById("numInput").value = "";
        }

        function showMemory() {
    
            let memoryUsed = vector.length * 8;
            document.getElementById("memoryDisplay").innerText = "Memory Used: " + memoryUsed + " bytes";
        }
    