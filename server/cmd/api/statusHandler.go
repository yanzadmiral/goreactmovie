package main

import (
	"net/http"
)

func (app *application) statusHandler(w http.ResponseWriter, r *http.Request) {
	currentStatus := AppStatus{
		Status:      "Onlinee",
		Environment: app.config.env,
		Version:     version,
	}

	app.writeJson(w, http.StatusOK, currentStatus, "Status")
}
