Código | Erro | Descrição
------ | ---- | ---------
0x00 | LDAP_SUCCESS | Requisição com o LDAP foi bem sucedida.
0x01 | LDAP_OPERATIONS_ERROR | Inicialização da biblioteca do LDAP falhou.
0x02 | LDAP_PROTOCOL_ERROR | Ocorreu um erro de protocolo no LDAP.
0x03 | LDAP_TIMELIMIT_EXCEEDED | Prazo excedeu no LDAP.
0x04 | LDAP_SIZELIMIT_EXCEEDED | Tamanho limite foi excedido no LDAP.
0x05 | LDAP_COMPARE_FALSE | Comparação no LDAP não existe.
0x06 | LDAP_COMPARE_TRUE | Comparação no LDAP existente.
0x07 | LDAP_AUTH_METHOD_NOT_SUPPORTED | O método de autenticação no LDAP não é suportado.
0x08 | LDAP_STRONG_AUTH_REQUIRED | A autenticação forte no LDAP é necessária.
0x09 | LDAP_REFERRAL_V2 | Encaminhado para a versão 2 do LDAP.
0x09 | LDAP_PARTIAL_RESULTS | Resultados parciais e encaminhamentos recebidos no LDAP.
0x0a | LDAP_REFERRAL | Ocorreu um encaminhamento no LDAP.
0x0b | LDAP_ADMIN_LIMIT_EXCEEDED | Limite do administrador no servidor do LDAP excedeu.
0x0c | LDAP_UNAVAILABLE_CRIT_EXTENSION | Extensão crítica não está disponível no LDAP.
0x0d | LDAP_CONFIDENTIALITY_REQUIRED | O sigilo é necessário no LDAP.
0x10 | LDAP_NO_SUCH_ATTRIBUTE | Atributo solicitado não existe no LDAP.
0x11 | LDAP_UNDEFINED_TYPE | O tipo não está definido no LDAP.
0x12 | LDAP_INAPPROPRIATE_MATCHING | Ocorreu uma correspondência inadequada no LDAP.
0x13 | LDAP_CONSTRAINT_VIOLATION | Uma violação de restrição ocorreu no LDAP.
0x14 | LDAP_ATTRIBUTE_OR_VALUE_EXISTS | O atributo existe ou o valor foi atribuído no LDAP.
0x15 | LDAP_INVALID_SYNTAX | A sintaxe é inválida no LDAP.
0x20 | LDAP_NO_SUCH_OBJECT | Objeto não existe no LDAP.
0x21 | LDAP_ALIAS_PROBLEM | A sigla (apelido) é inválida no LDAP.
0x22 | LDAP_INVALID_DN_SYNTAX | O nome distinto tem uma sintaxe inválida no LDAP.
0x23 | LDAP_IS_LEAF | O objeto é um objeto que pode conter outros objetos no LDAP.
0x24 | LDAP_ALIAS_DEREF_PROBLEM | Não pode indentificar o apelido no LDAP.
0x30 | LDAP_INAPPROPRIATE_AUTH | A autenticação no LDAP é inadequada.
0x31 | LDAP_INVALID_CREDENTIALS | A senha do LDAP é inválida.
0x32 | LDAP_INSUFFICIENT_RIGHTS | Os direitos de acesso do usuário são insuficientes no LDAP.
0x33 | LDAP_BUSY | O servidor do LDAP está ocupado.
0x34 | LDAP_UNAVAILABLE | O servidor do LDAP não está disponível.
0x35 | LDAP_UNWILLING_TO_PERFORM | O servidor do LDAP não manipula requisições do diretório.
0x36 | LDAP_LOOP_DETECT | A cadeia de encaminhamento tem loop de volta para um servidor de referência no LDAP.
0x40 | LDAP_NAMING_VIOLATION | Houve uma violação de nome no LDAP.
0x41 | LDAP_OBJECT_CLASS_VIOLATION | Ocorreu uma violação na classe do objeto no LDAP.
0x42 | LDAP_NOT_ALLOWED_ON_NONLEAF | Operação não é permitida em um objeto que pode conter outros objetos no LDAP.
0x43 | LDAP_NOT_ALLOWED_ON_RDN | A operação não é permitida em um atributo RDN do LDAP.
0x44 | LDAP_ALREADY_EXISTS | O objeto já existe no LDAP.
0x45 | LDAP_NO_OBJECT_CLASS_MODS | Não pode modificar a classe de objeto no LDAP.
0x46 | LDAP_RESULTS_TOO_LARGE | Os resultados retornados são muito grandes no LDAP.
0x47 | LDAP_AFFECTS_MULTIPLE_DSAS | Vários agentes do serviço de diretório do LDAP são afetados.
0x50 | LDAP_OTHER | Ocorreu um erro desconhecido no LDAP.
0x51 | LDAP_SERVER_DOWN | Não foi possível conectar no servidor LDAP.
0x52 | LDAP_LOCAL_ERROR | Ocorreu um erro local no LDAP.
0x53 | LDAP_ENCODING_ERROR | Ocorreu um erro de codificação no LDAP.
0x54 | LDAP_DECODING_ERROR | Ocorreu um erro de decodificação no LDAP.
0x55 | LDAP_TIMEOUT | O tempo de consulta no LDAP expodiu.
0x56 | LDAP_AUTH_UNKNOWN | Ocorreu um erro de autenticação no LDAP desconhecido.
0x57 | LDAP_FILTER_ERROR | O filtro de pesquisa no LDAP está incorreto.
0x58 | LDAP_USER_CANCELLED | O usuário cancelou a operação com o LDAP.
0x59 | LDAP_PARAM_ERROR | Um parâmetro incorreto foi passado para a rotina no LDAP.
0x5a | LDAP_NO_MEMORY | O sistema no LDAP está sem memória.
0x5b | LDAP_CONNECT_ERROR | Não é possível estabelecer uma conexão com o servidor do LDAP.
0x5c | LDAP_NOT_SUPPORTED | O recurso não é suportado no LDAP.
0x5d | LDAP_CONTROL_NOT_FOUND | AO controle especificado não foi encontrado no LDAP.
0x5e | LDAP_NO_RESULTS_RETURNED | Não foi devolvido nenhum resultado LDAP.
0x5f | LDAP_MORE_RESULTS_TO_RETURN | Resultados adicionais devem ser devolvidos do LDAP.
0x60 | LDAP_CLIENT_LOOP | Loop no cliente foi detectado.
0x61 | LDAP_REFERRAL_LIMIT_EXCEEDED | O limite de encaminhamento foi excedido.
0x0E | LDAP_SASL_BIND_IN_PROGRESS | Ligamento intermediário para multiplos estágios de ligação
