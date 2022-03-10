// go run demo.go

package main

import (
	"encoding/json"
	"fmt"
	"log"
)

func main() {
	handle_json()
}

// See ../1-json-primer.md for an explanation
func handle_json() {
	jsonText := `{"foo": {"bar": [{"paint": "red"}, {"paint": "green"}, {"paint": "blue"}]}}`
	data := make(map[string]interface{})
	err := json.Unmarshal([]byte(jsonText), &data)
	if err != nil {
		log.Fatal(err)
	}

	// data["foo"]["bar"][1]["paint"]
	demoLetter := data["foo"].
        (map[string]interface{})["bar"].
        ([]interface{})[1].
        (map[string]interface{})["paint"] // "green"
	fmt.Printf("%v\n", demoLetter)

	// data["foo"]["quux"] = {"stuff": "nonsense", "nums": [2.718, 3.142]}
	quux := map[string]interface{}{
		"stuff": "nonsense",
		"nums":  []float64{2.718, 3.142},
	}
	data["foo"].(map[string]interface{})["quux"] = quux

	result, err := json.MarshalIndent(data, "", "    ")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("%s\n", result)
}
