const addEventsToContainerAndChild = () => {
    const childDivList = document.querySelectorAll(".container-div-child");
    for (let index = 0; index < childDivList.length; index++) {

        let timeOutFunction;
        
        childDivList[index].addEventListener("mouseover", onMouseOver, false);
        childDivList[index].addEventListener("mouseout", onMouseOut, false);

        function onMouseOver() {
            childDivList[index].style.setProperty("background", getRandomColorStr());
            timeOutFunction = setTimeout(() => {
                const containerParentList = document.getElementsByClassName("container-div-parent");
                while (containerParentList[0].firstChild) {
                    containerParentList[0].removeChild(containerParentList[0].firstChild);
                }
            }, 2000);
        }

        function onMouseOut() {  
            childDivList[index].style.setProperty("background", getRandomColorStr());
            clearTimeout(timeOutFunction);
        }
    }
}

const createChildInsideContainer = ({ containerDiv, containerSizeInt, spanForErrors, childSizeInt, numberOfChildrenInt }) => {
    const totalPixelsAboutContainerDiv = (containerSizeInt * containerSizeInt);
    let totalRenderedPixelsInContainerDiv = 0;
    let numberOfChildrenRendered = 0;

    for (let index = 1; index < numberOfChildrenInt + 1; index++) {
        totalRenderedPixelsInContainerDiv = totalRenderedPixelsInContainerDiv + (childSizeInt * childSizeInt);
        if (index === 1  || totalPixelsAboutContainerDiv > totalRenderedPixelsInContainerDiv ) {
            const innerDiv = document.createElement("div");
            
            const childSizeWithPxStr = childSizeInt + 'px';
            const colorRandom = getRandomColorStr();
            innerDiv.style.background  = colorRandom;
            innerDiv.className = "container-div-child";
            innerDiv.style.width  = childSizeWithPxStr;
            innerDiv.style.height  = childSizeWithPxStr;
            
            containerDiv.appendChild(innerDiv);
            
            numberOfChildrenRendered++;
        } else {
            spanForErrors.innerHTML = `There are ${numberOfChildrenRendered} child squares rendered because the child size is bigger than the container size.`
        }
    }

    addEventsToContainerAndChild();
}

const drawContainer = (containerSizeInt, childSizeInt, numberOfChildrenInt) => {
    const containerSizeWithPXStr = containerSizeInt + 'px';

    const containerDiv = document.createElement("div");
    containerDiv.id = "block";
    containerDiv.className = "container-div-parent";
    containerDiv.style.background = getRandomColorStr();
    containerDiv.style.width  = containerSizeWithPXStr;
    containerDiv.style.height  = containerSizeWithPXStr;
    document.getElementsByTagName("body")[0].appendChild(containerDiv);

    const spanForErrors = document.createElement("span");

    spanForErrors.className = "span-error";
    spanForErrors.style.width = '100px';
    spanForErrors.style.height = '100px';
    document.getElementsByTagName("body")[0].appendChild(spanForErrors);
    

    if (containerSizeInt > childSizeInt) {  
        createChildInsideContainer({containerDiv, containerSizeInt, spanForErrors, childSizeInt, numberOfChildrenInt });
    } else {
        spanForErrors.innerHTML = "There are 0 child squares rendered because the child size is bigger than the container size."
    }

};

drawContainer(400, 50, 60);
// drawContainer(300, 200, 4);
// drawContainer(310, 200, 4);
// drawContainer(413, 42, 30);
// drawContainer(200, 300, 2);





