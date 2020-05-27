<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;
use App\Http\Resources\Todos as TodoResource;
use App\Http\Resources\TodosCollection;

class TodoController extends Controller
{
    public function index()
    {
        return new TodosCollection(Todo::all());
    }

    public function show($id)
    {
        return new TodoResource(Todo::findOrFail($id));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
        ]);

        $todo = Todo::create($request->all());

        return (new TodoResource($todo))
                ->response()
                ->setStatusCode(201);
    }

    public function complete($id, Request $request)
    {
        $request->merge(['is_done' => (bool) json_decode($request->get('is_done'))]);
        $request->validate([
            'is_done' => 'required|boolean'
        ]);

        $todo = Todo::findOrFail($id);
        $todo->is_done = $request->get('is_done');
        $todo->save();

        return new TodoResource($todo);
    }

    public function delete($id)
    {
        $todo = Todo::findOrFail($id);
        $todo->delete();

        return response()->json(null, 204);
    }

    public function uncomplete($id)
    {
        $todo = Todo::findOrFail($id);
        $todo->is_done = false;

        return new TodoResource($todo);
    }
}
