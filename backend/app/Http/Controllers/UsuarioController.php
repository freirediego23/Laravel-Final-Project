<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuario = Usuario::all();
        return $usuario;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, $id)
    {
        $user = new Usuario();
        
        $user->usuario=$request->usuario;
        $user->clave=$request->clave;
        $user->habilitado=$request->habilitado;
        $user->fecha=$request->fecha;
        $user->save();
        Usuario::create($request->all());

        return "Usuario creado";
    }

    /**
     * Display the specified resource.
     */
    public function show(Usuario $usuario)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Usuario $usuario)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $user = Usuario::find($id);
        $user->usuario=$request->usuario;
        $user->clave=$request->clave;
        $user->habilitado=$request->habilitado;
        $user->fecha=$request->fecha;
        $user->save();
        return "Usuario actualizado";
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $user = Usuario::find($id);
        $user->delete();

        return "usuario eliminado";
    }
}