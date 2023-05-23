$(document).ready(() => {
  $("#personas").hide();

  $("#importarJson").click(function () {
    $.ajax({
      type: "GET",
      url: "data.json",
      dataType: "json",
    }).done((data) => {
      $.each(data, function (indice, persona) {
        let fila = $("<tr>");
        fila.append($(`<td>${persona.id}</td>`));
        fila.append($(`<td>${persona.name}</td>`));
        fila.append($(`<td>${persona.username}</td>`));
        fila.append($(`<td>${persona.email}</td>`));
        fila.append($(`<td>${persona.address.street}</td>`));
        fila.append($(`<td>${persona.address.suite}</td>`));
        fila.append($(`<td>${persona.address.city}</td>`));
        fila.append($(`<td>${persona.address.zipcode}</td>`));
        fila.append($(`<td>${persona.address.geo.lat}</td>`));
        fila.append($(`<td>${persona.address.geo.lng}</td>`));
        fila.append($(`<td>${persona.phone}</td>`));
        fila.append($(`<td>${persona.website}</td>`));
        fila.append($(`<td>${persona.company.name}</td>`));
        fila.append($(`<td>${persona.company.catchPhrase}</td>`));
        fila.append($(`<td>${persona.company.bs}</td>`));

        $("#personas tbody").append(fila);
      });

      $("#personas").show();
    });
  });
});

function doSearch() {
  const tableReg = document.getElementById("personas");

  const searchText = document.getElementById("searchTerm").value.toLowerCase();

  let total = 0;

  for (let i = 1; i < tableReg.rows.length; i++) {
    if (tableReg.rows[i].classList.contains("noSearch")) {
      continue;
    }

    let found = false;

    const cellsOfRow = tableReg.rows[i].getElementsByTagName("td");

    for (let j = 0; j < cellsOfRow.length && !found; j++) {
      const compareWith = cellsOfRow[j].innerHTML.toLowerCase();

      if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
        found = true;

        total++;
      }
    }

    if (found) {
      tableReg.rows[i].style.display = "";
    } else {
      tableReg.rows[i].style.display = "none";
    }
  }

  const lastTR = tableReg.rows[tableReg.rows.length - 1];

  const td = lastTR.querySelector("td");

  lastTR.classList.remove("hide", "red");

  if (searchText == "") {
    lastTR.classList.add("hide");
  }
}