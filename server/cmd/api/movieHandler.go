package main

import (
	"errors"
	"net/http"
	"server/models"
	"strconv"
	"time"

	"github.com/julienschmidt/httprouter"
)

func (app *application) getOneMovie(w http.ResponseWriter, r *http.Request) {
	params := httprouter.ParamsFromContext(r.Context())

	id, err := strconv.Atoi(params.ByName("id"))

	if err != nil {
		app.logger.Print(errors.New("invalid Parameter"))
	}

	// app.logger.Println("the id is : ", id)

	movie := models.Movie{
		ID:          id,
		Title:       "Some Title",
		Description: "Some Description",
		Year:        2022,
		ReleaseDate: time.Date(1990, 12, 01, 01, 01, 01, 0, time.Local),
		Runtime:     112,
		Rating:      5,
		MPAARating:  "PG-13",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	app.writeJson(w, http.StatusOK, movie, "movie")
}
