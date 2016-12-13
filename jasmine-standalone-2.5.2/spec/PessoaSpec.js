describe("Uma Pessoa", function(){

  it("pode ter um sexo MULHER", function(){
    pessoa.sexo = MULHER;
    expect(pessoa.sexo).toBe(MULHER);
  });

  it("pode ter um sexo HOMEM", function(){
    pessoa.sexo = HOMEM;
    expect(pessoa.sexo).toBe(HOMEM);
  });

});
