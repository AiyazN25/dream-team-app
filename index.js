(function(){

    "use strict";
    window.onload = function(){

        var addPlayerBtn = $("#add-player");
        var playerNameInput = $("#player-name-input");
        var playersList = $("#players-list");
        var playersListArray = [];
        var beginDraftBtn = $("#begin-draft-btn");
        var draftResultsDiv = $("#draft-results");

        addPlayerBtn.click(function(){
            if(playerNameInput.val()){

                let removeBtn = document.createElement("button");
                removeBtn.append(document.createTextNode("Remove"));
                removeBtn.classList.add("remove-btn");
                removeBtn.addEventListener("click", function(){
                    this.parentNode.remove();
                })

                let li = document.createElement("li");
                let nameSpanNode = document.createElement("span");
                nameSpanNode.classList.add("name-span");
                nameSpanNode.append(document.createTextNode(playerNameInput.val()));
                li.append(nameSpanNode);
                li.append(removeBtn);
                playersList.append(li);

            }
            
        })

        beginDraftBtn.click(function(){
            $("#players-list li .name-span").each(function(){
                playersListArray.push({name: $(this)[0].innerText, value: Math.random()});
            })
            playersListArray.sort(function(a,b){ return a.value - b.value });
            console.log(playersListArray);

            for(let i=playersListArray.length - 1; i>=0; i--){
                console.log(i);
                let announcementDiv = document.createElement("div");
                announcementDiv.classList.add("announcement");
                let announcementNum = document.createElement("h4");
                announcementNum.append(
                    document.createTextNode("Pick number " + String(i+1) + " of the draft goes to..."));
                announcementDiv.append(announcementNum);
                let announcedNameDiv = document.createElement("div");
                announcedNameDiv.classList.add("centered")
                announcedNameDiv.append(document.createTextNode(playersListArray[i].name));
                announcementDiv.append(announcedNameDiv);
                draftResultsDiv.append(announcementDiv);
            }
            let draftEnd = document.createElement("h3");
            draftEnd.classList.add("centered");
            draftEnd.append(document.createTextNode("DRAFT ENDED"));
            draftResultsDiv.append(draftEnd);
            playersListArray = [];
        })


    }

}());