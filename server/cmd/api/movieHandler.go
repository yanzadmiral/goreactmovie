package main

import (
	"net/http"
	"strconv"

	"github.com/julienschmidt/httprouter"
)

func (app *application) getOneMovie(w http.ResponseWriter, r *http.Request) {
	params := httprouter.ParamsFromContext(r.Context())

	id, err := strconv.Atoi(params.ByName("id"))

	if err != nil {
		//app.logger.Print(errors.New("invalid Parameter"))
		app.errorJson(w, err)
		return
	}

	// app.logger.Println("the id is : ", id)

	movie, err := app.models.DB.Get(id)

	app.writeJson(w, http.StatusOK, movie, "movie")
}

func (app *application) getAllMovie(w http.ResponseWriter, r *http.Request) {
	movies, err := app.models.DB.All()
	if err != nil {
		app.errorJson(w, err)
		return
	}

	err = app.writeJson(w, http.StatusOK, movies, "movies")
	if err != nil {
		app.errorJson(w, err)
		return
	}
}

func (app *application) getAllGenre(w http.ResponseWriter, r *http.Request) {
	genres, err := app.models.DB.GetGenreAll()
	if err != nil {
		app.errorJson(w, err)
		return
	}

	err = app.writeJson(w, http.StatusOK, genres, "genres")
	if err != nil {
		app.errorJson(w, err)
		return
	}
}
