UPDATE equipo
SET tip_equipo = 'Escritorio'
WHERE tip_equipo = 'Computador de Escritorio';

UPDATE equipo
SET tip_equipo = 'Portatil'
WHERE tip_equipo = 'Computador Portatil';

UPDATE equipo
SET cod_almacen = REPLACE(cod_almacen, '_', '-');

ALTER TABLE cpu_equipo MODIFY velocidad VARCHAR(50);
