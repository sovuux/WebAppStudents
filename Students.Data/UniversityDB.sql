PGDMP  /                    |         
   University    16.1    16.1     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398 
   University    DATABASE     �   CREATE DATABASE "University" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "University";
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    16405    Students    TABLE     �  CREATE TABLE public."Students" (
    "Id" integer NOT NULL,
    "Surname" character varying(50),
    "Name" character varying(50),
    "Patron" character varying(50),
    "City" character varying(50),
    "PostIndex" character varying(10),
    "Street" character varying(100),
    "Email" character varying(100),
    "PhoneNumber" character varying(20),
    "Faculty" character varying(100),
    "Specialty" character varying(100),
    "Course" integer,
    "GroupName" character varying(50)
);
    DROP TABLE public."Students";
       public         heap    postgres    false    4            �            1259    16404    student_main_id_seq    SEQUENCE     �   CREATE SEQUENCE public.student_main_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.student_main_id_seq;
       public          postgres    false    4    216            �           0    0    student_main_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.student_main_id_seq OWNED BY public."Students"."Id";
          public          postgres    false    215                       2604    16408    Students Id    DEFAULT     r   ALTER TABLE ONLY public."Students" ALTER COLUMN "Id" SET DEFAULT nextval('public.student_main_id_seq'::regclass);
 >   ALTER TABLE public."Students" ALTER COLUMN "Id" DROP DEFAULT;
       public          postgres    false    215    216    216            �          0    16405    Students 
   TABLE DATA           �   COPY public."Students" ("Id", "Surname", "Name", "Patron", "City", "PostIndex", "Street", "Email", "PhoneNumber", "Faculty", "Specialty", "Course", "GroupName") FROM stdin;
    public          postgres    false    216   )       �           0    0    student_main_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.student_main_id_seq', 45, true);
          public          postgres    false    215                       2606    16412    Students student_main_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public."Students"
    ADD CONSTRAINT student_main_pkey PRIMARY KEY ("Id");
 F   ALTER TABLE ONLY public."Students" DROP CONSTRAINT student_main_pkey;
       public            postgres    false    216            �   �  x��W�rG}^}�Q��Ų�o�����8�@��D��) _*e�e�7J!��qޢ�h,�������U쇔JU�l�L��s�{U��Gzw�_�T�뾣�8����R��@����H_Z�H^�i܎;��ʊ���9�wUJ劣{:Ć��j<��ج���k5��K�����jN)��n8��x�l�s?׃\����0ҡ��!�/p{�kC,����{+x8�^��x+&0`14N�KOp�5�ZD�����~����X/� ���y��'!n���k1 J#���l�7�[[������G��M�����
��i����{̍a�$��Ԗ8��<�s�
m f��C\1�s���/ t��]��g�ާ��t��{�H0��*B��`9&�
��J��EW�&}C��r��R���&͗�����#_�� ~��{`�0��g�?�aWr`��B��I:�Y��hme��u��-��
��
T�g�T���(~jr��(״�g�4��9��Nɼ����r�y���,�8�{��IUʿ����åF��ڃZVPA�`��;E����͂��>��eqc�����}��	�>L���dJA��+��	|���M_��tFX:�fk����_�S��\Y��_�p��ǉw"	������)Ĕ�u���q�'�}���Tm��6k��e/E���5��<�#f|dQ4�[��%5�R�&<�p
#	���-��")�}��O�b�8���R��>�h53T�Ji�{dr�M�5����ⷔ���ߐI��K2����� !\��g�rNQ�//D���8.Q�Q��,�W*�TLF���z�`�X�wZ��|a�+���j��}�,=��coY��k�~i �o�/���D����A�Z�Hu)�mW��)�uS�OY}�m�&?�� P+"~K)Y�P�Ң�鞷�G��^��n��z�|UJ�O����NIvaټ��׹�/���gġLǞ'Զ�11��,L�'4sS�����%+���n����Z+���/��d��ܸGZ�~Dr3½�$-'$�.rf���ٰ�:�51�Y��\��g���R��e4��.u~1V�������{��%'P�^ ���s34F��#��/�<���F-K�<dB�dOt���	l�2K�?S�'�e����ed���c�n�����d�����#�vu�j�⧙��.ۉ���,E���tW��N��F.�]�M`6Pꮚ��3ɣ�V#s�
>7�b�u�Qw�\!�f����s];�XJw0'ﲞ�Y�Dgﶌ��/�y�	2�ǵ������+?��$B:��د$#��!�}�&=e�^]��F���C�����7�-w�a���e��%��$gaT��h;^`Nƶ9��Z��(n�H�o#;+̄�p߼ŋ�r��ɂx����H�R���G����f��Ə�>�_�;
!�'K�8� �6�?W�����'�����ώra��Gh����~soee�_�(��     