function CalculateTip() {
        const billAmount = parseFloat(document.getElementById("billAmount").value);
        const percentageTip = parseFloat(document.getElementById("percentageTip").value);
        const errorMessage = document.getElementById("errorMessage");
        const tipAmountInput = document.getElementById("tipAmount");
        const totalAmountInput = document.getElementById("totalAmount");
        console.log(billAmount);
        console.log(percentageTip);

        if (isNaN(billAmount) || isNaN(percentageTip) || billAmount < 0 || percentageTip < 0) {
          errorMessage.textContent = "Please enter valid numbers for bill and tip percentage.";
          tipAmountInput.value = "";
          totalAmountInput.value = "";
          return;
        }

        const tip = (billAmount * percentageTip) / 100;
        const total = billAmount + tip;

        tipAmountInput.value = tip.toFixed(2);
        totalAmountInput.value = total.toFixed(2);
        errorMessage.textContent = "";
      }